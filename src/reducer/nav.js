import { ON_TOGGLE } from '../actions/nav';

const initialState = {
    opened: false,
    sections: [
        {
            title: "Home",
            path: ""
        },
        {
            title: "Parcours",
            path: "parcours"
        },
        {
            title: "Compétences",
            path: "competences"
        },
        {
            title: "Projets",
            path: "projets"
        },
        {
            title: "Contact",
            path: "contact"
        }
]
}

const nav = (state = initialState, action = {}) => {
    switch (action.type) {
        case ON_TOGGLE:
            return{
                ...state,
            opened: !state.opened,
            }
        default:
            return state;
    }
};

export default nav;