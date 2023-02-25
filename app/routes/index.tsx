import {useTranslation} from "react-i18next";
import i18n from "~/i18n";
import i18next from "~/i18next.server";
import {json, LoaderArgs} from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  let t = await i18next.getFixedT(request);
  let title = t("greeting");
  console.log('title', title);
  return json({ title });
}
export default function Index() {
  const { t } = useTranslation();
  return <h1>{t("greeting")}</h1>;
}
