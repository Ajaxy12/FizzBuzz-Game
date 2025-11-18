// Day of Week Calculation
document.getElementById('calcDayBtn').addEventListener('click', function() {
    const dayNumber = parseInt(document.getElementById('dayInput').value);
    const resultBox = document.getElementById('dayResult');
    
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 365) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid day number (1-365)</p>';
        resultBox.classList.add('show');
        return;
    }
    
    // Using modulo to calculate day of week
    // Assuming day 1 is Monday (you can adjust this)
    const dayOfWeek = (dayNumber - 1) % 7;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayName = days[dayOfWeek];
    
    // Calculate which week and day in that week
    const weekNumber = Math.floor((dayNumber - 1) / 7) + 1;
    const dayInWeek = ((dayNumber - 1) % 7) + 1;
    
    resultBox.innerHTML = `
        <p><strong>Day ${dayNumber}</strong> falls on:</p>
        <p class="day-name">${dayName}</p>
        <p>Week: ${weekNumber}, Day in week: ${dayInWeek}</p>
        <p><small>Calculation: (${dayNumber} - 1) % 7 = ${dayOfWeek}</small></p>
    `;
    resultBox.classList.add('show');
});

// Recurring Event Scheduler
document.getElementById('scheduleBtn').addEventListener('click', function() {
    const interval = parseInt(document.getElementById('intervalInput').value);
    const resultBox = document.getElementById('scheduleResult');
    
    if (isNaN(interval) || interval < 1 || interval > 30) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid interval (1-30)</p>';
        resultBox.classList.add('show');
        return;
    }
    
    let events = [];
    for (let day = 1; day <= 30; day++) {
        // Using modulo to find recurring events
        if (day % interval === 0) {
            events.push(day);
        }
    }
    
    resultBox.innerHTML = `
        <p><strong>Events occur every ${interval} days:</strong></p>
        <div style="margin-top: 10px;">
            ${events.map(day => `<span class="event-day">Day ${day}</span>`).join('')}
        </div>
        <p style="margin-top: 15px;"><small>Total events in 30 days: ${events.length}</small></p>
        <p><small>Pattern: day % ${interval} === 0</small></p>
    `;
    resultBox.classList.add('show');
});

// Time-Based Categorization
document.getElementById('categorizeBtn').addEventListener('click', function() {
    const hour = parseInt(document.getElementById('hourInput').value);
    const resultBox = document.getElementById('categoryResult');
    
    if (isNaN(hour) || hour < 0 || hour > 23) {
        resultBox.innerHTML = '<p style="color: red;">Please enter a valid hour (0-23)</p>';
        resultBox.classList.add('show');
        return;
    }
    
    // Using modulo to categorize hours into 4 groups
    const category = hour % 4;
    const categories = [
        { name: 'Morning Shift', color: '#FFD700', hours: '4am-7am, 8am-11am' },
        { name: 'Afternoon Shift', color: '#FF8C00', hours: '12pm-3pm, 4pm-7pm' },
        { name: 'Evening Shift', color: '#FF6347', hours: '8pm-11pm, 12am-3am' },
        { name: 'Night Shift', color: '#9370DB', hours: '12am-3am, 4am-7am' }
    ];
    
    const selectedCategory = categories[category];
    
    resultBox.innerHTML = `
        <p><strong>Hour ${hour}:00</strong> belongs to:</p>
        <div class="category-badge" style="background: ${selectedCategory.color};">
            ${selectedCategory.name}
        </div>
        <p style="margin-top: 15px;">Category includes: ${selectedCategory.hours}</p>
        <p><small>Calculation: ${hour} % 4 = ${category}</small></p>
        <p style="margin-top: 15px;"><strong>All Categories:</strong></p>
        <div style="margin-top: 10px;">
            ${categories.map((cat, idx) => 
                `<span style="display: inline-block; padding: 5px 10px; margin: 3px; background: ${cat.color}; color: white; border-radius: 5px; ${idx === category ? 'border: 3px solid #333;' : ''}">${cat.name}</span>`
            ).join('')}
        </div>
    `;
    resultBox.classList.add('show');
});

// Allow Enter key to submit
document.getElementById('dayInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('calcDayBtn').click();
});

document.getElementById('intervalInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('scheduleBtn').click();
});

document.getElementById('hourInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('categorizeBtn').click();
});

