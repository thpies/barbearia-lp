import os
from datetime import datetime, timedelta
from pathlib import Path

from flask import Flask, url_for

from blueprints.site import site_bp


def _asset_version(static_folder, filename):
    configured_version = os.environ.get('NIVELA_ASSET_VERSION')
    if configured_version:
        return configured_version

    try:
        return int((Path(static_folder) / filename).stat().st_mtime)
    except OSError:
        return '1'


def create_app():
    app = Flask(__name__)
    app.config.from_mapping(
        APP_LOGIN_URL=os.environ.get('NIVELA_APP_URL', 'https://app.nivela.com.br/login'),
        SEND_FILE_MAX_AGE_DEFAULT=timedelta(days=30),
    )

    @app.context_processor
    def inject_template_globals():
        def static_asset(filename):
            version = _asset_version(app.static_folder, filename)
            return url_for('static', filename=filename, v=version)

        return {
            'ano_atual': datetime.now().year,
            'static_asset': static_asset,
        }

    app.register_blueprint(site_bp)
    return app


app = create_app()
application = app


if __name__ == '__main__':
    app.run(debug=True)
