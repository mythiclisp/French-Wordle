
const contextList = {
    'passe': [["verb", "verb"]],
    'allee': [["verb", "verb"]],
    'alles': [["verb", "verb"]],
    'parti': [["verb", "verb"]],
    'marche': [["verb", "verb"]],
    'mange': [["verb", "verb"]],
    'laver': [["verb", "verb"]],
    'couru': [["verb", "verb"]],
    'ferme': [["verb", "verb"]],
    'coupe': [["verb", "verb"]],
    'perdu': [["verb", "verb"]],
    'voulu': [["verb", "verb"]],
    'connu': [["verb", "verb"]],
    'ecrit': [["verb", "verb"]],
    'danse': [["verb", "verb"]],
    'rendu': [["verb", "verb"]],
    'monte': [["verb", "verb"]],
    'parle': [["verb", "verb"]],
    'suivi': [["verb", "verb"]],
    'hotel': [["noun", "noun"]],
    'ecole': [["noun", "noun"]],
    'musee': [["noun", "noun"]],
    'stade': [["noun", "noun"]],
    'plage': [["noun", "noun"]],
    'lycee': [["noun", "noun"]],
    'poste': [["noun", "noun"]],
    'salon': [["noun", "noun"]],
    'match': [["noun", "noun"]],
    'train': [["noun", "noun"]],
    'metro': [["noun", "noun"]],
    'nager': [["verb", "verb"]],
    'venir': [["verb", "verb"]],
    'apres': [["adverb", "adverb"]],
    'avant': [["adverb", "adverb"]],
    'sujet': [["noun", "noun"]],
    'jouer': [["verb", "verb"]],
    'frere': [["noun", "noun"]],
    'soeur': [["noun", "noun"]],
    'fille': [["noun", "noun"]],
    'oncle': [["noun", "noun"]],
    'tante': [["noun", "noun"]],
    'notre': [["", ""]],
    'votre': [["", ""]],
    'leurs': [["", ""]],
    'femme': [["noun", "noun"]],
    'etage': [["noun", "noun"]],
    'veste': [["verb", "noun"]],
    'botte': [["noun", "noun"]],
    'moche': [["noun", "noun"]],
}

const sentenceList = {
'passe': [["verb", "verb"]],
    'allee': ["Je ne suis pas allé", "I didn't go"],
    'alles': ["ils sont allés", "They went"],
    'parti': ["Nous avons parti", "We left"],
    'marche': ["Je marche tres bien", "I walk very well"],
    'mange': ["J'ai mangé une pizza", "I ate a pizza"],
    'laver': ["J'ai besoin de laver", "I need to wash"],
    'couru': ["Elle a couru vite", "She ran quickly"],
    'ferme': ["Il ferme son ordinateur", "He is closing his computer"],
    'coupe': ["Il coupe", "He's cutting"],
    'perdu': ["J'étais perdu", "I was lost"],
    'voulu': ["J'ai voulu une voiture", "I wanted a car"],
    'connu': ["J'ai connu comment conduire", "I knew how to drive"],
    'ecrit': ["C'est écrit", "It's written"],
    'danse': ["Je danse beacoupe", "I dance a lot"],
    'rendu': ["J'ai rendu ton livre", "I returned your book"],
    'monte': ["Il monte", "He's climbing"],
    'parle': ["Je parle anglais", "I speak English"],
    'suivi': ["Je t'ai suivi", "I followed you"],
    'hotel': ["C'est un grand hôtel", "That's a big hotel"],
    'ecole': ["Je vais à l'école", "I'm going to school"],
    'musee': ["Le Louvre est un musée", "The Louvre is a musuem"],
    'stade': ["Je regarde un match de foot dans le stade", "I'm watching a soccer game in the stadium"],
    'plage': ["La plage est le long du mer", "The beach is along the sea"],
    'lycee': ["J'aime ce lycee", "I like this high school"],
    'carte': ["Une carte de postale", "A postcard"],
    'salon': ["Le salon la-bas", "The lounge over there"],
    'match': ["Un match de tennis", "A tennis match"],
    'train': ["Je prends le train pour aller au travail", "I'm taking the train to go to work"],
    'metro': ["Le metro est plus vite que le voitre", "The subway is faster than the car"],
    'nager': ["J'aime nager dans le mer", "I like swimming in the sea"],
    'venir': ["Tu dois venir maintenant", "You have to come now"],
    'apres': ["Apres mon match de foot", "After my soccer match"],
    'avant': ["Avant je me couche", "Before I go to bed"],
    'sujet': ["J'aime le sujet de la géographie", "I like the subject geography"],
    'jouer': ["Tu as besoin de jouer avec nous", "You have to play with us"],
    'frere': ["J'ai un frère", "I have one brother"],
    'soeur': ["J'ai une petite soeur", "I have one little sister"],
    'fille': ["C'est ma fille", "This is my daughter"],
    'oncle': ["Mon oncle est tres vieux", "My oncle is very old"],
    'tante': ["Ma tante est tres amustante", "My aunte is very funny"],
    'notre': ["Notre chat est noir", "Our cat is black"],
    'votre': ["Votre livre est intéressant", "Your book is interesting"],
    'leurs': ["Leurs bateaux sont chers", "Their boats are expensive"],
    'femme': ["C'est ma femme", "That's my wife"],
    'etage': ["J'habite au cinquième étage", "I live on the fifth floor"],
    'veste': ["J'ai une veste verte", "I have a green jacket"],
    'botte': ["J'ai suelement une botte", "I only have one boot"],
    'moche': ["Te es vraiment moche", "You're really ugly"],
}


export const getContextClue = (solution: string) => {

    const contextClues = Object.values(contextList)[Object.keys(contextList).indexOf(solution.toLowerCase())]
    const randint = Math.floor(Math.random() * ((contextClues.length - 1) - 0 + 1)) + 0

    return contextClues[randint]
}


export const getWinSentece = (solution: string) => {

    const endSentence = Object.values(sentenceList)[Object.keys(sentenceList).indexOf(solution.toLowerCase())]

    return `
    ${endSentence[0]} :
    ${endSentence[1]}
    `
}