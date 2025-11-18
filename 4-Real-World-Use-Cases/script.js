// E-commerce: Special Offers
document.getElementById('offerBtn').addEventListener('click', function() {
    const customerId = parseInt(document.getElementById('customerId').value);
    const interval = parseInt(document.getElementById('offerInterval').value);
    const resultBox = document.getElementById('offerResult');
    
    if (isNaN(customerId) || customerId < 1 || isNaN(interval) || interval < 2) {
        resultBox.innerHTML = '<p style="color: red;">Please enter valid numbers (interval must be at least 2)</p>';
        resultBox.classList.add('show');
        return;
    }
    
    const eligible = customerId % interval === 0;
    
    resultBox.innerHTML = `
        <p><strong>Customer ${customerId}</strong>:</p>
        ${eligible ? 
            `<div class="offer-badge">🎉 Special Offer Available!</div>
            <p style="margin-top: 15px;">You qualify for our special discount!</p>` :
            `<p style="color: #666; margin-top: 15px;">No special offer at this time.</p>`
        }
        <p style="margin-top: 15px;"><small>Calculation: ${customerId} % ${interval} = ${customerId % interval}</small></p>
        <p style="margin-top: 15px;"><strong>Offer Pattern:</strong> Every ${interval}th customer gets a special offer</p>
    `;
    resultBox.classList.add('show');
});

// Social Media: Notification Batching
document.getElementById('notificationBtn').addEventListener('click', function() {
    const notificationId = parseInt(document.getElementById('notificationId').value);
    const resultBox = document.getElementById('notificationResult');
    
    if (isNaN(notificationId) || notificationId < 1) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid notification ID</p>';
        resultBox.classList.add('show');
        return;
    }
    
    const priority = notificationId % 3;
    const priorities = [
        { name: 'High Priority', color: '#FF6347', action: 'Show immediately' },
        { name: 'Medium Priority', color: '#FF8C00', action: 'Show in batch' },
        { name: 'Low Priority', color: '#FFD700', action: 'Show later' }
    ];
    
    const selectedPriority = priorities[priority];
    
    resultBox.innerHTML = `
        <p><strong>Notification ${notificationId}</strong> has:</p>
        <div class="priority-badge" style="background: ${selectedPriority.color}; color: white;">
            ${selectedPriority.name}
        </div>
        <p style="margin-top: 15px;">Action: ${selectedPriority.action}</p>
        <p><small>Calculation: ${notificationId} % 3 = ${priority}</small></p>
        <p style="margin-top: 15px;"><strong>All Priority Levels:</strong></p>
        <div style="margin-top: 10px;">
            ${priorities.map((p, idx) => 
                `<span class="priority-badge" style="background: ${p.color}; color: white; ${idx === priority ? 'border: 3px solid #333;' : ''}">${p.name}</span>`
            ).join('')}
        </div>
    `;
    resultBox.classList.add('show');
});

// Gaming: Spawn Rates & Events
document.getElementById('gameBtn').addEventListener('click', function() {
    const gameDay = parseInt(document.getElementById('gameDay').value);
    const resultBox = document.getElementById('gameResult');
    
    if (isNaN(gameDay) || gameDay < 1 || gameDay > 30) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid day (1-30)</p>';
        resultBox.classList.add('show');
        return;
    }
    
    const events = [];
    if (gameDay % 7 === 0) {
        events.push({ name: 'Weekly Boss Event', type: 'Boss' });
    }
    if (gameDay % 3 === 0) {
        events.push({ name: 'Special Item Spawn', type: 'Item' });
    }
    if (gameDay % 5 === 0) {
        events.push({ name: 'Double XP Day', type: 'Bonus' });
    }
    if (gameDay % 10 === 0) {
        events.push({ name: 'Monthly Celebration', type: 'Celebration' });
    }
    
    if (events.length === 0) {
        events.push({ name: 'Regular Day', type: 'Normal' });
    }
    
    resultBox.innerHTML = `
        <p><strong>Day ${gameDay}</strong> Events:</p>
        <div style="margin-top: 10px;">
            ${events.map(event => 
                `<span class="event-badge">${event.name}</span>`
            ).join('')}
        </div>
        <p style="margin-top: 15px;"><small>Weekly Event: day % 7 === 0 | Items: day % 3 === 0 | XP: day % 5 === 0 | Monthly: day % 10 === 0</small></p>
    `;
    resultBox.classList.add('show');
});

// System Administration: Backup Scheduling
document.getElementById('backupBtn').addEventListener('click', function() {
    const backupDay = parseInt(document.getElementById('backupDay').value);
    const interval = parseInt(document.getElementById('backupInterval').value);
    const resultBox = document.getElementById('backupResult');
    
    if (isNaN(backupDay) || backupDay < 1 || backupDay > 31 || isNaN(interval) || interval < 1) {
        resultBox.innerHTML = '<p style="color: red;">Please enter valid numbers</p>';
        resultBox.classList.add('show');
        return;
    }
    
    const shouldBackup = backupDay % interval === 0;
    
    resultBox.innerHTML = `
        <p><strong>Day ${backupDay}</strong>:</p>
        ${shouldBackup ? 
            `<div class="schedule-badge">✅ Backup Scheduled</div>
            <p style="margin-top: 15px;">System backup will run today.</p>` :
            `<p style="color: #666; margin-top: 15px;">No backup scheduled for this day.</p>`
        }
        <p style="margin-top: 15px;"><small>Calculation: ${backupDay} % ${interval} = ${backupDay % interval}</small></p>
        <p style="margin-top: 15px;"><strong>Backup Schedule:</strong> Every ${interval} days</p>
    `;
    resultBox.classList.add('show');
});

// Complete System Simulation
document.getElementById('simulateBtn').addEventListener('click', function() {
    const resultBox = document.getElementById('simulationResult');
    
    let html = '<p><strong>Complete Real-World System Simulation: 15 Items</strong></p>';
    html += '<table class="simulation-table">';
    html += '<thead><tr><th>ID</th><th>E-commerce Offer</th><th>Social Priority</th><th>Game Event</th><th>System Backup</th></tr></thead><tbody>';
    
    for (let id = 1; id <= 15; id++) {
        const offer = id % 5 === 0 ? '✅ Yes' : '❌ No';
        const priority = ['High', 'Medium', 'Low'][id % 3];
        const gameEvent = [];
        if (id % 7 === 0) gameEvent.push('Boss');
        if (id % 3 === 0) gameEvent.push('Item');
        if (id % 5 === 0) gameEvent.push('XP');
        const gameEvents = gameEvent.length > 0 ? gameEvent.join(', ') : 'None';
        const backup = id % 3 === 0 ? '✅ Yes' : '❌ No';
        
        html += `<tr>
            <td><strong>${id}</strong></td>
            <td>${offer}</td>
            <td>${priority}</td>
            <td>${gameEvents}</td>
            <td>${backup}</td>
        </tr>`;
    }
    
    html += '</tbody></table>';
    html += '<p style="margin-top: 15px;"><small>Offers: id % 5 === 0 | Priority: id % 3 | Events: id % 7, 3, 5 | Backup: id % 3 === 0</small></p>';
    html += '<p style="margin-top: 10px;"><small>This demonstrates how modulo is used across different industries!</small></p>';
    
    resultBox.innerHTML = html;
    resultBox.classList.add('show');
});

// Allow Enter key to submit
document.getElementById('customerId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('offerBtn').click();
});

document.getElementById('offerInterval').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('offerBtn').click();
});

document.getElementById('notificationId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('notificationBtn').click();
});

document.getElementById('gameDay').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('gameBtn').click();
});

document.getElementById('backupDay').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('backupBtn').click();
});

document.getElementById('backupInterval').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('backupBtn').click();
});

