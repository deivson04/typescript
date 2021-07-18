// obs quando tem a interrogacao que dizer que o valor e opcional
interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'deivson',
        email: 'deivson@deivson.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}