let archetypes = [
    {
        id: 1,
        archetype: "Warrior",
        zodiac: "Aries",
        planet: "Mars",
        partner: "Libra",
        element: "Fire",
        modality: "Cardinal",
        action: "Initiate",
        statement: "I Am",
        axis: "Physical",
        texture: "Bold",
        time: "Birth",
        house: "House of Self",
        aspect: "Opposition"
    },
    {
        id: 2,
        archetype: "Crafter",
        zodiac: "Taurus",
        planet: "Venus",
        partner: "Scorpio",
        element: "Earth",
        modality: "Fixed",
        action: "Care",
        statement: "I Have",
        axis: "Emotional",
        texture: "Solid",
        time: "Toddler",
        house: "House of Possession",
        aspect: "Square"
    },
    {
        id: 3,
        archetype: "Thinker",
        zodiac: "Gemini",
        planet: "Mercury",
        partner: "Sagittarius",
        element: "Air",
        modality: "Mutable",
        action: "Communicate",
        statement: "I Know",
        axis: "Mental",
        texture: "Flighty",
        time: "Birth",
        house: "House of Exchange",
        aspect: "Sextile"
    },
    {
        id: 4,
        archetype: "Nurturer",
        zodiac: "Cancer",
        planet: "Moon",
        partner: "Capricorn",
        element: "Water",
        modality: "Cardinal",
        action: "Nurture",
        statement: "I Feel",
        axis: "Material",
        texture: "Soft",
        time: "Birth",
        house: "House of Nurturing",
        aspect: "Trine"
    },
    {
        id: 5,
        archetype: "Leader",
        zodiac: "Leo",
        planet: "Sun",
        partner: "Aquarius",
        element: "Fire",
        modality: "Fixed",
        action: "Create",
        statement: "I Will",
        axis: "Social",
        texture: "Iridescent",
        time: "Birth",
        house: "House of Expression",
        aspect: "Semisextile"
    },
    {
        id: 6,
        archetype: "Aligner",
        zodiac: "Virgo",
        planet: "Mercury",
        partner: "Pisces",
        element: "Earth",
        modality: "Mutable",
        action: "Refine",
        statement: "I Analyse",
        axis: "Spiritual",
        texture: "Polished",
        time: "Birth",
        house: "House of Responsibility",
        aspect: "Conjunction"
    },
    {
        id: 7,
        archetype: "Balancer",
        zodiac: "Libra",
        planet: "Venus",
        partner: "Aries",
        element: "Air",
        modality: "Cardinal",
        action: "Harmonise",
        statement: "I Empathise",
        axis: "Physical",
        texture: "Iridescent",
        time: "Birth",
        house: "House of Connections",
        aspect: "Opposition"

    },
    {
        id: 8,
        archetype: "Investigator",
        zodiac: "Scorpio",
        planet: "Pluto",
        partner: "Taurus",
        element: "Water",
        modality: "Fixed",
        action: "Uncover",
        statement: "I Desire",
        axis: "Emotional",
        texture: "Opaque",
        time: "Birth",
        house: "House of Catharsis",
        aspect: "Square"
    },
    {
        id: 9,
        archetype: "Explorer",
        zodiac: "Sagittarius",
        planet: "Jupiter",
        partner: "Gemini",
        element: "Fire",
        modality: "Mutable",
        action: "Seek",
        statement: "I Seek",
        axis: "Mental",
        texture: "Opaque",
        time: "Birth",
        house: "House of Exploration",
        aspect: "Sextile"
    },
    {
        id: 10,
        archetype: "Builder",
        zodiac: "Capricorn",
        planet: "Saturn",
        partner: "Cancer",
        element: "Earth",
        modality: "Cardinal",
        action: "Build",
        statement: "I Execute",
        axis: "Material",
        texture: "Gritty",
        time: "Birth",
        house: "House of Achievement",
        aspect: "Trine"
    },
    {
        id: 11,
        archetype: "Innovator",
        zodiac: "Aquarius",
        planet: "Uranus",
        partner: "Leo",
        element: "Air",
        modality: "Fixed",
        action: "Influence",
        statement: "I Could",
        axis: "Social",
        texture: "Iridescent",
        time: "Birth",
        house: "House of Community",
        aspect: "Semisextile"
    },
    {
        id: 12,
        archetype: "Dreamer",
        zodiac: "Pisces",
        planet: "Neptune",
        partner: "Virgo",
        element: "Water",
        modality: "Mutable",
        action: "Dream",
        statement: "I Believe",
        axis: "Spiritual",
        texture: "Iridescent",
        time: "Birth",
        house: "House of Reflection",
        aspect: "Conjunction"
    }
]

class Archetype {
    name; //warrior
    element; //earth

    constructor(name, theme) {
        this.name = name;
        this.theme = theme;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name} and my archetype is the ${this.theme}`);
    }
}

const leo = new Archetype(archetypes[0].zodiac, archetypes[0].archetype);
leo.introduceSelf(); // Output: Hi! I'm Aries and my archetype is the Warrior

function nextArchetype() {
    let currentArchetype = document.getElementById("archetype").innerHTML;
    let currentIndex = archetypes.findIndex(a => a.archetype === currentArchetype);
    let nextIndex = (currentIndex + 1) % archetypes.length;
    document.getElementById("archetype").innerHTML = archetypes[nextIndex].archetype;
    document.getElementById("zodiac").innerHTML = archetypes[nextIndex].zodiac;
}

function init() {
    
    // Create table HTML for 12signtable
    let tableHtml = `<table><thead><tr><th class="green">No.</th><th class="green">Archetype</th><th class="green">Zodiac</th><th class="blue"><a href="https://en.wikipedia.org/wiki/Western_astrology#The_planets">Planet</a></th><th class="blue"><a href="https://en.wikipedia.org/wiki/House_(astrology)">House</a></th><th class="blue"><a href="https://en.wikipedia.org/wiki/Astrological_aspect">Aspect</a></th></tr></thead><tbody>`;
    archetypes.forEach(a => {
        tableHtml += `<tr><td>${a.id}</td><td>${a.archetype}</td><td>${a.zodiac}</td><td>${a.planet}</td><td>${a.house}</td></tr>`;
    });
    tableHtml += `<tr><td></td><td></td><td>What</td><td>+ Who</td><td>+ Where</td><td>+ How</td><td>= Why</td></tr>`;
    tableHtml += `</tbody></table>`;
    document.getElementById("12signtable").innerHTML = tableHtml;

    let tableExampleHtml = `<table><thead><tr><th class="green">No.</th><th class="green">Archetype</th><th class="green">Zodiac</th><th class="blue"><a href="https://en.wikipedia.org/wiki/Western_astrology#The_planets">Planet</a></th><th class="blue"><a href="https://en.wikipedia.org/wiki/House_(astrology)">House</a></th><th class="blue"><a href="https://en.wikipedia.org/wiki/Astrological_aspect">Aspect</a></th></tr></thead><tbody>`;
    archetypes.forEach(a => {
    tableExampleHtml += `<tr>`;
    tableExampleHtml += `<td>${a.id}</td>`;
    tableExampleHtml += `<td${a.archetype === 'Balancer' ? ' class="orange"' : ''}>${a.archetype}</td>`;
    tableExampleHtml += `<td${a.zodiac === 'Libra' ? ' class="orange"' : ''}>${a.zodiac}</td>`;
    tableExampleHtml += `<td${a.planet === 'Sun' ? ' class="orange"' : ''}>${a.planet}</td>`;
    tableExampleHtml += `<td${a.house === 'House of Reflection' ? ' class="orange"' : ''}>${a.house}</td>`;
    
    tableExampleHtml += `</tr>`;
    });
    tableExampleHtml += `<tr><td></td><td></td><td>What</td><td>+ Who</td><td>+ Where</td><td>+ How</td><td>= Why</td></tr>`;
    tableExampleHtml += `</tbody></table>`;
    document.getElementById("12signtableexample").innerHTML = tableExampleHtml;
}

window.addEventListener('load', init);

// Zodiac Wheel Canvas Drawing & Hover
function drawWheel(highlightIndex = null, highlightOpposite = null) {
    const canvas = document.getElementById('zodiacWheel');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const cx = w/2, cy = h/2, r = Math.min(w, h)/2;
    ctx.clearRect(0, 0, w, h);
    // Draw background image if available
    const imgElem = document.getElementById('zodiac wheel');
    if (imgElem && imgElem.complete) {
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.drawImage(imgElem, 0, 0, w, h);
        ctx.restore();
    }
    const sections = 12;
    for (let i = 0; i < sections; i++) {
        const start = (i/sections) * 2 * Math.PI;
        const end = ((i+1)/sections) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, start, end);
        ctx.closePath();
        let isHighlighted = (highlightIndex === i) || (highlightOpposite === i);
    ctx.fillStyle = isHighlighted ? '#ffb169' : 'rgba(0,0,0,0)';
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

    }
    // Draw axis label in center of canvas
    ctx.save();
    ctx.font = 'bold 22px BC, BodoniCondC, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let axisText;
    if (highlightIndex !== null && highlightIndex >= 0 && highlightIndex < sections) {
        axisText = archetypes[sections - 1 - highlightIndex].axis;
    } else {
        axisText = 'hover here';
    }
    ctx.fillStyle = '#ffb169';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 60, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.fillText(axisText, cx, cy);
    ctx.restore();
}

function setupWheelHover() {
    const canvas = document.getElementById('zodiacWheel');
    if (!canvas) return;
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = canvas.width/2, cy = canvas.height/2;
        const dx = x - cx, dy = y - cy;
        const r = Math.min(canvas.width, canvas.height)/2 - 10;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist > r) {
            drawWheel(null, null);
            return;
        }
        let angle = Math.atan2(dy, dx);
        if (angle < 0) angle += 2*Math.PI;
        const section = Math.floor(angle/(2*Math.PI/12));
        const opposite = (section + 6) % 12;
        drawWheel(section, opposite);
    });
    canvas.addEventListener('mouseleave', function() {
        drawWheel(null, null);
    });
}

window.addEventListener('load', function() {
    // Table toggle logic
    const simpleTable = document.getElementById('simpleTable');
    const toggleBtn = document.getElementById('toggleTableBtn');
    const detailRows = document.querySelectorAll('.detailRow');
    const simpleRows = document.querySelectorAll('.simpleRow');
    let detailsVisible = false;
    if (toggleBtn && simpleTable) {
        // Ensure initial state: detailRows hidden, simpleRows visible
        detailRows.forEach(row => row.style.display = 'none');
        simpleRows.forEach(row => row.style.display = '');
        toggleBtn.textContent = 'Show Details';
        toggleBtn.addEventListener('click', function() {
            detailsVisible = !detailsVisible;
            detailRows.forEach(row => row.style.display = detailsVisible ? '' : 'none');
            simpleRows.forEach(row => row.style.display = detailsVisible ? 'none' : '');
            toggleBtn.textContent = detailsVisible ? 'Show Simple' : 'Show Details';
        });
    }

    // Center #interactiveWheel div using JS
    const wheelDiv = document.getElementById('interactiveWheel');
    if (wheelDiv) {
        wheelDiv.style.display = 'flex';
        wheelDiv.style.justifyContent = 'center';
        wheelDiv.style.alignItems = 'center';
        wheelDiv.style.margin = '32px auto';
        wheelDiv.style.width = '100%';
    }
    const imgElem = document.getElementById('zodiac wheel');
    if (imgElem && !imgElem.complete) {
        imgElem.onload = function() {
            drawWheel();
            setupWheelHover();
        };
    } else {
        drawWheel();
        setupWheelHover();
    }
});
