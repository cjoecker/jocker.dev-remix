import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  return <h1 className="text-3xl font-bold underline">{t("greeting")}</h1>;
}
