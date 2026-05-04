from flask import Blueprint, current_app, redirect, render_template, url_for


site_bp = Blueprint('site', __name__)

PLAN_SLUGS = {'solo', 'equipe', 'profissional', 'enterprise', 'unidade-pro', 'fiscal-pro'}
INSTITUTIONAL_SECTIONS = {'sobre', 'implantacao', 'contato', 'termos', 'privacidade', 'lgpd', 'cookies', 'ajuda'}


@site_bp.route('/')
def index():
    return render_template('index.html')


@site_bp.route('/entrar')
def entrar():
    return redirect(current_app.config['APP_LOGIN_URL'])


@site_bp.route('/demo')
def demo():
    return redirect(url_for('site.index') + '#demo')


@site_bp.route('/planos')
def planos():
    return redirect(url_for('site.index') + '#pricing')


@site_bp.route('/ajuda')
def ajuda():
    return redirect(url_for('site.index', help='1') + '#footer')


@site_bp.route('/planos/<plano>')
def plano_comercial(plano):
    if plano not in PLAN_SLUGS:
        return redirect(url_for('site.planos'))
    return redirect(url_for('site.index', modal='contato', plano=plano) + '#pricing')


@site_bp.route('/institucional/<secao>')
def institucional(secao):
    if secao not in INSTITUTIONAL_SECTIONS:
        return redirect(url_for('site.index'))
    return redirect(url_for('site.index', modal=secao) + '#footer')
