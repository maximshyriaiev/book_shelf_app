import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CookieConsent from 'react-cookie-consent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <CookieConsent
            location="bottom"
            buttonText="Прийняти"
            cookieName="gdprConsent"
            style={{ background: "#2B373B", color: "#FFFFFF" }}
            buttonStyle={{ background: "#FFFFFF", color: "#2B373B", fontSize: "14px", borderRadius: "5px" }}
            expires={150}
        >
            Цей сайт використовує cookies для покращення досвіду користувача. Продовжуючи використовувати сайт, ви погоджуєтесь з нашою{' '}
            <a href="/privacy" style={{ color: "#FFFFFF", textDecoration: "underline" }}>Політикою конфіденційності</a> відповідно до GDPR.
        </CookieConsent>
    </React.StrictMode>
);