import {createStore} from 'vuex'

export const store = createStore({
    el: '#app',
    state: {
        Sidebar: {
            channels: [
                {name: "general"},
                {name: "support"},
                {name: "marketing"},
                {name: 'thailand'},
                {name: 'bali'},
                {name: 'poland'},
                {name: 'australia'},
                {name: 'jobs'},
                {name: 'startups'},
                {name: 'italy'},
                {name: 'freelance'},
            ],
            friends: [
                {name: 'Orlando Diggs'},
                {name: 'Carmen Velasco'},
                {name: 'Marie Jensen'},
                {name: 'Alex Lee'},
                {name: 'Leo Gill'},
                {name: 'Britney Cooper'},
            ],
        },
        Profile: {
            fullName: 'FreedMeet',
            photoUrl: '',
            status: 'This user is fucking tiiired',
            contacts: [
                {facebook: 'https://www.youtube.com/'},
                {twitter: '#'},
                {instagram: '#'},
                {linkedLn: '#'}
            ],
            info:[
                {userName: 'userName'},
                {email: 'email'},
                {skype: 'skype'},
                {timeZone: 'timeZone'},
            ],
            asActive: false
        }
    },
});
