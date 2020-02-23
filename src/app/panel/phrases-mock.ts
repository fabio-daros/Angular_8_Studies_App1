// fazendo o mock dentro de panel porque as frases aparecerao no painel.
//aqui esta o array com as frases usadas....

 import { Phrase } from '../shared/phrase.model' 

 export const PHRASES: Phrase[] = [   // array das frases que aparecerao no panel e que será importado para panel.component.ts
    
    { phraseEng: 'I like to learn' , phrasePtBr: 'Eu gosto de aprender' },
    
    { phraseEng: 'I watch tv' , phrasePtBr: 'Eu assisto tv' },

    { phraseEng: 'How are you?' , phrasePtBr: 'Como vai você?' },

    { phraseEng: 'I eat bread' , phrasePtBr: 'Eu como pão' }

]  