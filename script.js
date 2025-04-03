async function fetchFiles() {
    try {
        let response = await fetch('http://127.0.0.1:5000/files');
        let files = await response.json();
        uploadedFiles = files.map(name => ({ name }));
        renderFileList();
    } catch (error) {
        console.error("Error fetching files:", error);
    }
}

function renderFileList() {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';

    uploadedFiles.forEach((file, index) => {
        const li = document.createElement('li');
        const size = 'Unknown'; 

        li.innerHTML = `
            <div class="file-title">${getFileIcon(file.name)} ${file.name} <small>(${size} KB)</small></div>
            <div class="file-actions">
                <button onclick="downloadFile('${file.name}')">⬇️ Download</button>
            </div>
        `;

        fileList.appendChild(li);
    });
}

function downloadFile(filename) {
    window.location.href = `http://127.0.0.1:5000/files/${filename}`;
}

fetchFiles();
