// Batch Processing Demo
document.getElementById('batchBtn').addEventListener('click', function() {
    const totalRecords = parseInt(document.getElementById('totalRecords').value);
    const batchSize = parseInt(document.getElementById('batchSize').value);
    const resultBox = document.getElementById('batchResult');
    
    if (isNaN(totalRecords) || totalRecords < 1 || isNaN(batchSize) || batchSize < 1) {
        resultBox.innerHTML = '<p style="color: red;">Please enter valid numbers</p>';
        resultBox.classList.add('show');
        return;
    }
    
    const batches = {};
    for (let i = 1; i <= totalRecords; i++) {
        const batchNumber = Math.floor((i - 1) / batchSize) + 1;
        if (!batches[batchNumber]) {
            batches[batchNumber] = [];
        }
        batches[batchNumber].push(i);
    }
    
    let html = `<p><strong>Processing ${totalRecords} records in batches of ${batchSize}:</strong></p>`;
    html += `<p>Total batches: ${Object.keys(batches).length}</p>`;
    html += '<div style="margin-top: 15px;">';
    
    for (const [batchNum, records] of Object.entries(batches)) {
        html += `<div style="margin-bottom: 10px;"><strong>Batch ${batchNum}:</strong> `;
        records.forEach(id => {
            html += `<span class="batch-item">Record ${id}</span>`;
        });
        html += '</div>';
    }
    
    html += '</div>';
    html += `<p style="margin-top: 15px;"><small>Pattern: Math.floor((recordId - 1) / ${batchSize}) + 1</small></p>`;
    
    resultBox.innerHTML = html;
    resultBox.classList.add('show');
});

// Data Partitioning Demo
document.getElementById('partitionBtn').addEventListener('click', function() {
    const recordId = parseInt(document.getElementById('recordId').value);
    const serverCount = parseInt(document.getElementById('serverCount').value);
    const resultBox = document.getElementById('partitionResult');
    
    if (isNaN(recordId) || recordId < 1 || isNaN(serverCount) || serverCount < 2) {
        resultBox.innerHTML = '<p style="color: red;">Please enter valid numbers (server count must be at least 2)</p>';
        resultBox.classList.add('show');
        return;
    }
    
    // Using modulo to assign to server
    const serverId = recordId % serverCount;
    
    resultBox.innerHTML = `
        <p><strong>Record ${recordId}</strong> is assigned to:</p>
        <div class="server-badge">Server ${serverId}</div>
        <p style="margin-top: 15px;"><small>Calculation: ${recordId} % ${serverCount} = ${serverId}</small></p>
        <p style="margin-top: 15px;"><strong>Server Distribution:</strong></p>
        <div style="margin-top: 10px;">
            ${Array.from({length: serverCount}, (_, i) => 
                `<span class="server-badge" style="${i === serverId ? 'border: 3px solid #333;' : ''}">Server ${i}</span>`
            ).join('')}
        </div>
    `;
    resultBox.classList.add('show');
});

// Category Classification Demo
document.getElementById('categorizeBtn').addEventListener('click', function() {
    const productId = parseInt(document.getElementById('productId').value);
    const resultBox = document.getElementById('categoryResult');
    
    if (isNaN(productId) || productId < 1) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid product ID</p>';
        resultBox.classList.add('show');
        return;
    }
    
    // Using modulo to categorize products
    const category = productId % 3;
    const categories = [
        { name: 'Electronics', color: '#FFD700', description: 'Phones, laptops, gadgets' },
        { name: 'Clothing', color: '#FF8C00', description: 'Shirts, pants, accessories' },
        { name: 'Home & Garden', color: '#FF6347', description: 'Furniture, tools, decor' }
    ];
    
    const selectedCategory = categories[category];
    
    resultBox.innerHTML = `
        <p><strong>Product ID ${productId}</strong> belongs to:</p>
        <div class="category-badge" style="background: ${selectedCategory.color};">
            ${selectedCategory.name}
        </div>
        <p style="margin-top: 15px;">${selectedCategory.description}</p>
        <p><small>Calculation: ${productId} % 3 = ${category}</small></p>
        <p style="margin-top: 15px;"><strong>All Categories:</strong></p>
        <div style="margin-top: 10px;">
            ${categories.map((cat, idx) => 
                `<span style="display: inline-block; padding: 8px 15px; margin: 5px; background: ${cat.color}; color: white; border-radius: 8px; font-weight: 600; ${idx === category ? 'border: 3px solid #333;' : ''}">${cat.name}</span>`
            ).join('')}
        </div>
    `;
    resultBox.classList.add('show');
});

// Live Database Simulation
document.getElementById('simulateBtn').addEventListener('click', function() {
    const resultBox = document.getElementById('simulationResult');
    
    let html = '<p><strong>Database Simulation: 20 Products</strong></p>';
    html += '<table class="simulation-table">';
    html += '<thead><tr><th>Product ID</th><th>Category</th><th>Server</th><th>Batch</th></tr></thead><tbody>';
    
    for (let productId = 1; productId <= 20; productId++) {
        const category = productId % 3;
        const server = productId % 3; // 3 servers
        const batch = Math.floor((productId - 1) / 5) + 1; // batches of 5
        
        const categories = ['Electronics', 'Clothing', 'Home & Garden'];
        const categoryName = categories[category];
        
        html += `<tr>
            <td><strong>${productId}</strong></td>
            <td>${categoryName}</td>
            <td>Server ${server}</td>
            <td>Batch ${batch}</td>
        </tr>`;
    }
    
    html += '</tbody></table>';
    html += '<p style="margin-top: 15px;"><small>Categories: productId % 3 | Servers: productId % 3 | Batches: groups of 5</small></p>';
    
    resultBox.innerHTML = html;
    resultBox.classList.add('show');
});

// Allow Enter key to submit
document.getElementById('totalRecords').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('batchBtn').click();
});

document.getElementById('batchSize').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('batchBtn').click();
});

document.getElementById('recordId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('partitionBtn').click();
});

document.getElementById('serverCount').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('partitionBtn').click();
});

document.getElementById('productId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('categorizeBtn').click();
});

