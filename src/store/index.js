import {createStore} from 'vuex'
import facebookIcons from '../assets/profile/ContactsIcons/facebook.svg'
import instagramIcons from '../assets/profile/ContactsIcons/instagram.svg'
import twitterIcons from '../assets/profile/ContactsIcons/twitter.svg'
import linkedinIcons from '../assets/profile/ContactsIcons/linkedin.svg'

export const store = createStore({
    el: '#app',
    state: {
        Sidebar: {
            channels: [
                {name: "channel_1"},
                {name: "channel_2"},
                {name: "channel_3"},
                {name: 'channel_4'},
                {name: 'channel_5'},
                {name: 'channel_6'},
                {name: 'channel_7'}
            ],
            friends: [
                {name: 'friend_1'},
                {name: 'friend_2'},
                {name: 'friend_3'},
                {name: 'friend_4'},
                {name: 'friend_5'},
                {name: 'friend_6'},
            ],
        },
        Profile: {
            fullName: 'User',
            photoUrl: '',
            status: 'User Status',
            contacts: [
                {key: 'facebook', link: 'https://www.facebook.com', icons: facebookIcons },
                {key: 'twitter', link: 'https://www.twitter.com', icons: twitterIcons},
                {key : 'instagram', link: 'https://www.instagram.com', icons: instagramIcons},
                {key: 'linkedLn', link: 'https://www.linkedin.com', icons: linkedinIcons}
            ],
            info:[
                {key: 'userName', value: 'userName'},
                {key: 'email', value: 'email'},
                {key: 'skype', value: 'skype'},
                {key: 'timeZone', value: 'timeZone'},
            ],
            isActive: true
        }
    },
});
