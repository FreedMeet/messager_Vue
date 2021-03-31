import {createStore} from 'vuex'
import facebookIcons from '../assets/profile/ContactsIcons/facebook.svg'
import instagramIcons from '../assets/profile/ContactsIcons/instagram.svg'
import twitterIcons from '../assets/profile/ContactsIcons/twitter.svg'
import linkedinIcons from '../assets/profile/ContactsIcons/linkedin.svg'

export const store = createStore({
    el: '#app',
    state: {
        channelContent: [
            {
                name: 'channel_1',
                channelMessages: [
                    {author: 'user_1', content: 'message_1'}
                ]
            },
            {
                name: 'channel_2',
                channelMessages: [
                    {author: 'user_1', content: 'message_1'},
                    {author: 'user_2', content: 'message_2'},
                    {author: 'user_3', content: 'message_3'}
                ]
            },
            {
                name: 'channel_3',
                channelMessages: [
                    {author: 'user_1', content: 'message_1'},
                    {author: 'user_2', content: 'message_2'}
                ]
            },
            {
                name: 'channel_4',
                channelMessages: [
                    {author: 'user_1', content: 'message_1'}
                ]
            },
            {
                name: 'channel_5',
                channelMessages: [
                    {author: 'user_1', content: 'message_1'},
                    {author: 'user_2', content: 'message_2'},
                    {author: 'user_3', content: 'message_3'},
                    {author: 'user_4', content: 'message_4'},
                    {author: 'user_5', content: 'message_5'}
                ]
            }
        ],
        Sidebar: {
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
                {key: 'facebook', link: 'https://www.facebook.com', icons: facebookIcons},
                {key: 'twitter', link: 'https://www.twitter.com', icons: twitterIcons},
                {key: 'instagram', link: 'https://www.instagram.com', icons: instagramIcons},
                {key: 'linkedLn', link: 'https://www.linkedin.com', icons: linkedinIcons}
            ],
            info: [
                {key: 'userName', value: 'userName'},
                {key: 'email', value: 'email'},
                {key: 'skype', value: 'skype'},
                {key: 'timeZone', value: 'timeZone'},
            ],
            isActive: true
        }
    },
});
