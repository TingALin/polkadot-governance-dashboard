import i18next from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import common_cn from "./cn/common.json";
import common_en from "./en/common.json";

i18next.use(LanguageDetector).use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: 'cn',
    fallbackLng: 'en',
    debug: true,
    resources: {
        en: {
            common: common_en
        },
        cn: {
            common: common_cn
        },
    },
});

const lngs: any = {
    en: { id: 'En' },
    cn: { id: 'Cn' }
};

export const TranslationComponent = () => {
    const { t, i18n } = useTranslation('common');
    return <div>
        <div>
            {Object.keys(lngs).map((lng) => (
                <p>
                    <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].id}
                    </button>
                </p>
            ))}
        </div>
        {/* <Trans i18nKey="description.part1" /> */}
        <div>
            {t('welcome.title', { framework: 'React' })}
        </div>
    </div >
}