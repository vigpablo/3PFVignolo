import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AuthService, LoginFormValue } from "./auth.service";
import { enviroment } from "src/environments/environments";
import { Usuario } from "src/app/core/models";
import { Router } from "@angular/router";
import { skip } from "rxjs";

describe('Pruebas sobre Authservice', () => {
    let service: AuthService;
    let httpController: HttpTestingController

    beforeEach(async () => {
        await TestBed.configureTestingModule ({
            imports: [
                HttpClientTestingModule                                     
            ]
        }).compileComponents();

        service = TestBed.inject(AuthService);  
        httpController = TestBed.inject(HttpTestingController);                          
    })

    it ('El login debe funcionar', (done) => {
        const loginFake: LoginFormValue = {
            email: 'test@mail.com',
            password: '123456'
        }

        const MOCK_REQUEST_RESULT: Usuario[] = [
            {
                id: 1,
                apellido: 'testapellido',
                email: loginFake.email,
                nombre: 'testnombre',
                role: 'admin',
                password: loginFake.password,
                token: 'asdljaldjddsd',
            }
        ]

        service.login(loginFake);

        service.obtenerUsuarioAutenticado()
        .pipe(
            skip(1),
        )
        .subscribe((usuario) => {
            console.log(usuario);

            expect(usuario).toBeTruthy() //valida que el valor recibido no sea null, undefined ni false.
            done();
        });

        spyOn(TestBed.inject(Router), 'navigate');


        httpController.expectOne({
            url: `${enviroment.apiBaseUrl}/usuarios?email=${loginFake.email}&password=${loginFake.password}`,
            method: 'GET'
        }).flush(MOCK_REQUEST_RESULT)
    });

    it('El logout debe emitir un authUser null, remover el token del LS y redireccionar al usuario', () => { 
        service.establecerUsuarioAutenticado({
                id: 1,
                apellido: 'testapellido',
                email: 'email@test.com',
                nombre: 'testnombre',
                role: 'admin',
                password: '123456',
                token: 'asdljaldjddsd',
            })


        const spyOnNavigate = spyOn(TestBed.inject(Router), 'navigate')

        service.logout();

        const tokenLs = localStorage.getItem('token');

        expect(tokenLs).toBeNull();
        expect(spyOnNavigate).toHaveBeenCalled();
    
    });

});