import { useNavigate } from "react-router-dom";

import { BottomBar, Button, InputField } from "@kiesraad/ui";

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

interface AccountSetupFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export function AccountSetupForm() {
  const navigate = useNavigate();
  function handleSubmit(event: React.FormEvent<AccountSetupFormElement>) {
    event.preventDefault();
    navigate("/elections#new-account");
  }

  return (
    <form className="no_footer" onSubmit={handleSubmit}>
      <h2 className="mb-lg">Personaliseer je account</h2>
      <InputField
        name="username"
        label="Gebruikersnaam"
        hint="Je kan deze niet aanpassen. Log volgende keer weer met deze gebruikersnaam in."
        value="Gebruiker01"
        disabled
      />
      <InputField
        name="name"
        label="Jouw naam"
        subtext="(roepnaam + achternaam)"
        hint="Bijvoorbeeld Karel van Tellingen. Je naam wordt opgenomen in het verslag van deze
        invoersessie."
      />
      <InputField
        name="new_password1"
        label="Kies nieuw wachtwoord"
        hint="Je hebt dit wachtwoord nodig als je na een pauze opnieuw wilt inloggen. Gebruik minimaal 8 letters en 2 cijfers."
        type="password"
      />
      <InputField name="new_password2" label="Herhaal wachtwoord" type="password" margin={false} />
      <BottomBar type="footer">
        <BottomBar.Row>
          <Button type="submit" size="lg">
            Opslaan
          </Button>
        </BottomBar.Row>
      </BottomBar>
    </form>
  );
}
