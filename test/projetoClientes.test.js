import assert from 'node:assert';                                

import { realizarLogin } from '../src/projetoClientes.js';  

describe('Testes de Login', () => {
    it('1 Deve realizar login com sucesso', function(){
        const resultado = realizarLogin('jeanfelippe@testes.com','111');
        assert.strictEqual(resultado, 'login realizado com sucesso');
    });

    it('2 Deve informar que a credencial está expirada', function(){
        const resultado = realizarLogin('juliolima@testes.com','000');
        assert.strictEqual(resultado, 'usuario expirado');
    });

    it('3 Informar que usuário não foi encontrado', function() {
        const resultado = realizarLogin('usuario@naoexiste.com','111');
        assert.strictEqual(resultado, 'usuário não existe');
    });


    it('4 Deve informar credenciais incorretas para senha errada', function() {
        const resultado = realizarLogin('camila@testes.com','999');
        assert.strictEqual(resultado, 'senha incorreta');
    });
    });
