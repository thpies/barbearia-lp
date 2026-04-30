from flask import Flask, render_template

app = Flask(__name__)

# ─── Routes ────────────────────────────────────────────────────────────────────

@app.route('/')
def index():
    return render_template('index.html')

# Future: add /login redirect to your app's login page
# @app.route('/entrar')
# def entrar():
#     return redirect('https://app.nivela.com.br/login')

# ─── Run ───────────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    app.run(debug=True)
