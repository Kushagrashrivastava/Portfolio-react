import "./FormStyles.css";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();
  return (
        <div className="form">
          <form action="https://formsubmit.co/5d6dc8a4bf75336266ab6eefce55ff33" method="post">
            {/* formSubmit is used to send form data to email */}
            {/* here we will add thanks page later with the help of docs in formsubmit */}
            <label>{t('YourName')}</label>
            <input 
            type="text"
            name="username"
            placeholder={t('Username')}
            id="username"
            autoComplete="off"
            required
            ></input>
            <label>{t('Email')}</label>
            <input 
            type="email"
            name="email"
            placeholder={t('YourEmail')}
            id="email"
            autoComplete="off"
            required
            ></input>
            <label>{t('Subject')}</label>
            <input 
            type="text"
            name="subject"
            placeholder={t('Subject')}
            id="subject"
            autoComplete="off"
            required
            ></input>
            <label>{t('Message')}</label>
            <textarea 
            rows="6" 
            name="textarea"
            placeholder={t('Msg')}
            id="textarea"
            autoComplete="off"
            ></textarea>
            <button className="btn">{t('Btn4')}</button>
          </form>
        </div>
  );
};

export default Form;
