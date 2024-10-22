export const addNewUserFormControls = [
    {
        name: 'firstN',
        label: 'First Name',
        placeholder: 'Enter First Name',
        type: 'input'
    },
    {
        name: 'lastN',
        label: 'Last Name',
        placeholder: 'Enter Last Name',
        type: 'input'
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter Email Address',
        type: 'email'
    },
    {
        name: 'address',
        label: 'Address',
        placeholder: 'Enter Address',
        type: 'input'
    }
];

export const addNewUserInitialState = {
    firstN: '',
    lastN: '',
    email: '',
    address: ''
}