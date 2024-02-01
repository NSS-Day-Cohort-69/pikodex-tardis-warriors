import { getDatabase } from './database.js'

const allPikomon = getDatabase()

// Define and export a function to generate HTML, pikomonList
export const getPikoList = () => {
    let pikoHTML = ""
    for (const piko of allPikomon) {
        pikoHTML += `<section>
        <div class="piko-card">
            <div class="piko-img">
                <img src="${piko.imageUrl}">
            </div>
            <div class="piko-info">
                <div class="piko-name">${piko.name}</div>
                <div class="info-text">
                    <ul>
                        <li class="piko-category">Category: ${piko.category}</li>
                        <li class="piko-abilities">Abilities: ${piko.abilities}</li>
                        <li class="piko-weakness">Weakness: ${piko.weakness}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>`
    }
    return pikoHTML
}
    
