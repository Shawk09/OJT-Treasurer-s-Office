from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__)

FILE_DIRECTORY = r"C:\Users\Lenovo\Desktop\OJT\FINAL\FILE MANAGEMENT"

@app.route('/files', methods=['GET'])
def list_files():
    """Return a list of files in the directory"""
    try:
        files = os.listdir(FILE_DIRECTORY)
        return jsonify(files)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/files/<filename>', methods=['GET'])
def download_file(filename):
    """Download a specific file"""
    return send_from_directory(FILE_DIRECTORY, filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
