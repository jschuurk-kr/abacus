import { FormEvent } from "react";
import { useNavigate } from "react-router";

import { t } from "@kiesraad/i18n";
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
  function handleSubmit(event: FormEvent<AccountSetupFormElement>) {
    event.preventDefault();
    void navigate("/elections#new-account");
  }

  return (
    <form className="no_footer" onSubmit={handleSubmit}>
      <div>
        <h2 className="mb-lg">{t("user.personalize_account")}</h2>
        <InputField
          name="username"
          label={t("user.username")}
          hint={t("user.username_hint")}
          value={t("user.username_default")}
          disabled
        />
        <InputField name="name" label={t("user.name")} subtext={t("user.name_subtext")} hint={t("user.name_hint")} />
        <InputField
          name="new_password1"
          label={t("user.password_new")}
          hint={t("user.password_hint")}
          type="password"
        />
        <InputField name="new_password2" label={t("user.password_repeat")} type="password" />
      </div>
      <BottomBar type="footer">
        <BottomBar.Row>
          <Button type="submit" size="lg">
            {t("save")}
          </Button>
        </BottomBar.Row>
      </BottomBar>
    </form>
  );
}
