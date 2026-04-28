from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

from datetime import datetime
@app.route('/')
def index():
    return render_template('index.html', ano_atual=datetime.now().year)

if __name__ == '__main__':
    app.run(debug=True)
