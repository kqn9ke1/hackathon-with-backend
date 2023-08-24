import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import axios from "axios";
import { API } from "../../utils/consts";
import $axios from "../../utils/axios";
import { IAuthContextTypes, ITokens, IUserLogin, IUserRegister } from "./type";

// Создание контекста аутентификации
const authContext = createContext<IAuthContextTypes | null>(null);

// Пропсы для компонента AuthContext
type authContextPropsType = {
  children: ReactNode;
};

// Кастомный хук для удобного использования контекста аутентификации
export const useAuthContext = (): IAuthContextTypes => {
  return useContext(authContext) as IAuthContextTypes;
};

// Компонент AuthContext, предоставляющий состояние и методы аутентификации
const AuthContext: FC<authContextPropsType> = ({ children }) => {
  // Состояние пользователя
  const [user, setUser] = useState(null);

  // Метод регистрации пользователя
  const register = async (credentials: IUserRegister) => {
    try {
      const res = await axios.post(`${API}/account/register/`, credentials);
    } catch (e) {
      console.log(e);
    }
  };

  // Метод входа пользователя
  const login = async (credentials: IUserLogin) => {
    try {
      // Отправка запроса на вход пользователя и получение токенов
      const { data: tokens } = await axios.post<ITokens>(
        `${API}/account/login/`,
        credentials
      );

      // Сохранение токенов в локальном хранилище
      localStorage.setItem("tokens", JSON.stringify(tokens));

      // Запрос на получение профиля пользователя и установка пользователя в состояние
      const { data } = await $axios.get(`${API}/account/profile/`);
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  // Метод выхода пользователя
  const logout = () => {
    // Удаление токенов из локального хранилища и сброс пользователя
    localStorage.removeItem("tokens");
    setUser(null);
  };

  // Метод проверки статуса аутентификации пользователя
  const checkAuth = async () => {
    try {
      const tokens = JSON.stringify(localStorage.getItem("tokens") as string);
      if (tokens) {
        // Запрос на получение профиля пользователя и установка пользователя в состояние
        const { data } = await $axios.get(`${API}/account/profile/`);
        setUser(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Значение, предоставляемое контекстом
  const value = {
    user,
    register,
    login,
    logout,
    checkAuth,
  };

  // Предоставление значения через контекст для вложенных компонентов
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;

//!-----------------------

//? Данный код представляет собой реализацию контекста аутентификации (AuthContext) в React. Этот контекст предоставляет состояние и методы для регистрации, входа и выхода пользователя, а также проверки статуса аутентификации.

//? Этот код создает контекст аутентификации, предоставляющий методы и состояния, необходимые для работы с аутентификацией пользователей в приложении на React.
