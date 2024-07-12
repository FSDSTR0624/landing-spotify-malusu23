function toggleContent(code) {
    const content = document.getElementById('rowContent0'+code);
    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
}
