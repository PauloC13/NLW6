import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { Background } from "../components/Background";
import { useAuth } from "../hooks/auth";
import { SingIn } from "../screens/SignIn";

export function Routes(){
    const { user } = useAuth();
    return(
        <NavigationContainer>
           { user.id ? <AppRoutes/> : <SingIn/>}
        </NavigationContainer>
    );
}