// A/B Testing Demo
document.getElementById('abTestBtn').addEventListener('click', function() {
    const userId = parseInt(document.getElementById('userId').value);
    const resultBox = document.getElementById('abTestResult');
    
    if (isNaN(userId) || userId < 1) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid user ID</p>';
        resultBox.classList.add('show');
        return;
    }
    
    // Using modulo to split users into A/B groups
    const group = userId % 2;
    const groupName = group === 0 ? 'Group A' : 'Group B';
    const groupColor = group === 0 ? '#228b22' : '#ff8c00';
    
    resultBox.innerHTML = `
        <p><strong>User ${userId}</strong> is assigned to:</p>
        <div class="group-badge" style="background: ${groupColor};">
            ${groupName}
        </div>
        <p style="margin-top: 15px;"><small>Calculation: ${userId} % 2 = ${group}</small></p>
        <p style="margin-top: 15px;"><strong>Test Groups:</strong></p>
        <div style="margin-top: 10px;">
            <span class="group-badge" style="background: #228b22; ${group === 0 ? 'border: 3px solid #333;' : ''}">Group A (Even IDs)</span>
            <span class="group-badge" style="background: #ff8c00; ${group === 1 ? 'border: 3px solid #333;' : ''}">Group B (Odd IDs)</span>
        </div>
        <p style="margin-top: 15px;"><small>This is how platforms like Netflix test new features!</small></p>
    `;
    resultBox.classList.add('show');
});

// Load Balancing Demo
document.getElementById('loadBalanceBtn').addEventListener('click', function() {
    const requestId = parseInt(document.getElementById('requestId').value);
    const serverCount = parseInt(document.getElementById('loadServers').value);
    const resultBox = document.getElementById('loadBalanceResult');
    
    if (isNaN(requestId) || requestId < 1 || isNaN(serverCount) || serverCount < 2) {
        resultBox.innerHTML = '<p style="color: red;">Please enter valid numbers (server count must be at least 2)</p>';
        resultBox.classList.add('show');
        return;
    }
    
    // Using modulo to distribute requests
    const serverId = requestId % serverCount;
    
    resultBox.innerHTML = `
        <p><strong>Request ${requestId}</strong> is routed to:</p>
        <div class="server-badge">Server ${serverId}</div>
        <p style="margin-top: 15px;"><small>Calculation: ${requestId} % ${serverCount} = ${serverId}</small></p>
        <p style="margin-top: 15px;"><strong>Available Servers:</strong></p>
        <div style="margin-top: 10px;">
            ${Array.from({length: serverCount}, (_, i) => 
                `<span class="server-badge" style="${i === serverId ? 'border: 3px solid #333;' : ''}">Server ${i}</span>`
            ).join('')}
        </div>
        <p style="margin-top: 15px;"><small>This distributes load evenly across all servers!</small></p>
    `;
    resultBox.classList.add('show');
});

// Content Similarity Demo
document.getElementById('similarityBtn').addEventListener('click', function() {
    const contentId = parseInt(document.getElementById('contentId').value);
    const resultBox = document.getElementById('similarityResult');
    
    if (isNaN(contentId) || contentId < 1) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid content ID</p>';
        resultBox.classList.add('show');
        return;
    }
    
    // Using modulo to find similar content
    const similarityGroup = contentId % 5;
    const similarContent = [];
    
    for (let i = 1; i <= 20; i++) {
        if (i !== contentId && i % 5 === similarityGroup) {
            similarContent.push(i);
        }
    }
    
    resultBox.innerHTML = `
        <p><strong>Content ${contentId}</strong> is similar to:</p>
        <div style="margin-top: 10px;">
            ${similarContent.slice(0, 5).map(id => 
                `<span class="similar-item">Content ${id}</span>`
            ).join('')}
        </div>
        <p style="margin-top: 15px;"><small>Calculation: ${contentId} % 5 = ${similarityGroup}</small></p>
        <p style="margin-top: 15px;"><small>Similar content shares the same modulo result!</small></p>
    `;
    resultBox.classList.add('show');
});

// User Clustering Demo
document.getElementById('clusterBtn').addEventListener('click', function() {
    const userId = parseInt(document.getElementById('clusterUserId').value);
    const resultBox = document.getElementById('clusterResult');
    
    if (isNaN(userId) || userId < 1) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid user ID</p>';
        resultBox.classList.add('show');
        return;
    }
    
    // Using modulo to cluster users
    const cluster = userId % 4;
    const clusters = [
        { name: 'Casual Viewers', color: '#FFD700', behavior: 'Watch occasionally' },
        { name: 'Regular Users', color: '#FF8C00', behavior: 'Watch weekly' },
        { name: 'Power Users', color: '#FF6347', behavior: 'Watch daily' },
        { name: 'Binge Watchers', color: '#9370DB', behavior: 'Watch multiple hours daily' }
    ];
    
    const selectedCluster = clusters[cluster];
    const clusterMembers = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 4 === cluster) {
            clusterMembers.push(i);
        }
    }
    
    resultBox.innerHTML = `
        <p><strong>User ${userId}</strong> belongs to cluster:</p>
        <div class="cluster-badge" style="background: ${selectedCluster.color};">
            ${selectedCluster.name}
        </div>
        <p style="margin-top: 15px;">Behavior: ${selectedCluster.behavior}</p>
        <p><small>Calculation: ${userId} % 4 = ${cluster}</small></p>
        <p style="margin-top: 15px;"><strong>Cluster Members:</strong></p>
        <div style="margin-top: 10px;">
            ${clusterMembers.map(id => 
                `<span class="similar-item" style="background: ${selectedCluster.color}; ${id === userId ? 'border: 3px solid #333;' : ''}">User ${id}</span>`
            ).join('')}
        </div>
        <p style="margin-top: 15px;"><strong>All Clusters:</strong></p>
        <div style="margin-top: 10px;">
            ${clusters.map((cl, idx) => 
                `<span style="display: inline-block; padding: 8px 15px; margin: 5px; background: ${cl.color}; color: white; border-radius: 8px; font-weight: 600; ${idx === cluster ? 'border: 3px solid #333;' : ''}">${cl.name}</span>`
            ).join('')}
        </div>
    `;
    resultBox.classList.add('show');
});

// Platform Simulation
document.getElementById('simulateBtn').addEventListener('click', function() {
    const resultBox = document.getElementById('simulationResult');
    
    let html = '<p><strong>Netflix/YouTube Style Platform Simulation: 20 Users</strong></p>';
    html += '<table class="simulation-table">';
    html += '<thead><tr><th>User ID</th><th>A/B Group</th><th>Server</th><th>Cluster</th><th>Similar Content</th></tr></thead><tbody>';
    
    for (let userId = 1; userId <= 20; userId++) {
        const abGroup = userId % 2 === 0 ? 'A' : 'B';
        const server = userId % 5; // 5 servers
        const cluster = userId % 4;
        const similarContent = userId % 5; // Content similarity group
        
        const clusters = ['Casual', 'Regular', 'Power', 'Binge'];
        const clusterName = clusters[cluster];
        
        html += `<tr>
            <td><strong>${userId}</strong></td>
            <td>Group ${abGroup}</td>
            <td>Server ${server}</td>
            <td>${clusterName}</td>
            <td>Content Group ${similarContent}</td>
        </tr>`;
    }
    
    html += '</tbody></table>';
    html += '<p style="margin-top: 15px;"><small>A/B: userId % 2 | Server: userId % 5 | Cluster: userId % 4 | Content: userId % 5</small></p>';
    html += '<p style="margin-top: 10px;"><small>This shows how platforms distribute users and content efficiently!</small></p>';
    
    resultBox.innerHTML = html;
    resultBox.classList.add('show');
});

// Allow Enter key to submit
document.getElementById('userId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('abTestBtn').click();
});

document.getElementById('requestId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('loadBalanceBtn').click();
});

document.getElementById('loadServers').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('loadBalanceBtn').click();
});

document.getElementById('contentId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('similarityBtn').click();
});

document.getElementById('clusterUserId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('clusterBtn').click();
});

