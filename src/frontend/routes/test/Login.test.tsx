import { describe, it, expect, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";


// função auxiliar para preencher os campos
function fillField(label: string, value: string) {
    const input = screen.getByLabelText(label);
    fireEvent.change(input, { target: { value } });
}

describe("Login Component", () => {
    it("renderiza o componente corretamente", () => {
        render(<Login onSuccess={() => { }} />);
        
        expect(screen.getByLabelText(/usuário/i)).toBeDefined();
        expect(screen.getByLabelText(/senha/i)).toBeDefined();
    });

    it("mostra erro ao tentar logar com credenciais inválidas", () => {
        render(<Login onSuccess={() => { }} />);

        fillField("Usuário", "invalido");
        fillField("Senha", "errada");

        fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

        expect(screen.getByText("Usuário ou senha inválidos.")).toBeDefined();
    });

    it("loga com sucesso usando o usuário paulo", () => {
        const onSuccess = jest.fn();
        render(<Login onSuccess={onSuccess} />);

        fillField("Usuário", "paulo");
        fillField("Senha", "1234");

        fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

        expect(onSuccess).toHaveBeenCalledTimes(1);

    });

    it("loga com sucesso usando o usuário nathan", () => {
        const onSuccess = jest.fn();
        render(<Login onSuccess={onSuccess} />);

        fillField("Usuário", "nathan");
        fillField("Senha", "abcd");

        fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

        expect(onSuccess).toHaveBeenCalledTimes(1);
    });

    it("botão de mock preenche usuário e senha automaticamente", () => {
        render(<Login onSuccess={() => { }} />);

        const mockButtonPaulo = screen.getByText(/paulo \/ 1234/i);
        fireEvent.click(mockButtonPaulo);

        const userInput = screen.getByLabelText(/usuário/i) as HTMLInputElement;
        const passInput = screen.getByLabelText(/senha/i) as HTMLInputElement;

        expect(userInput.value).toBe("paulo");
        expect(passInput.value).toBe("1234");
    });
});
