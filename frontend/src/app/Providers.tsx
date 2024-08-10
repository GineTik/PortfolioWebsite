"use client"

import { persistor, store } from "@/lib/redux/store"
import ReactLenis from "lenis/react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import ValidationScreenProvider from "./_providers/validation-screen/ValidationScreenProvider"

type ProvidersProps = {
    children: any
}

const Providers = ({children}: ProvidersProps) => {
    return (
        <ValidationScreenProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ReactLenis root options={{ lerp: 0, duration: 2 }}>
                        {children}
                    </ReactLenis>
                </PersistGate>
            </Provider>
        </ValidationScreenProvider>
    )
}

export default Providers
