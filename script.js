document.getElementById('upiForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const upiId = document.getElementById('upiId').value;
    const note = document.getElementById('note').value;

    const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&tn=${encodeURIComponent(note)}`;
    
    document.getElementById('upiLink').innerText = upiLink;
});
