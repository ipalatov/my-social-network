const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Ivan', img: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg' },
        { id: 2, name: 'Sergey', img: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' },
        { id: 3, name: 'Tatyana', img: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' },
        { id: 4, name: 'Nastyusha', img: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg' },
        { id: 5, name: 'Artem', img: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg' },
        { id: 6, name: 'Vadim', img: 'https://shapka-youtube.ru/wp-content/uploads/2018/10/spartan.png' }
    ],
    messagesData: [
        { id: 1, message: 'Ivan message' },
        { id: 2, message: 'Sergey message' },
        { id: 3, message: 'Tatyana message' },
        { id: 4, message: 'Nastyusha message' },
        { id: 5, message: 'Artem message' },
        { id: 6, message: 'Vadim message' }
    ],

};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 7, message: action.messageBody }],
            };
        default:
            return state;
    }
}


export const sendDialogMessageActionCreator = (messageBody) => ({ type: SEND_MESSAGE, messageBody })

export default dialogsReducer;