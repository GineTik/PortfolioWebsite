"use client"

import { persistor, store } from "@/lib/redux/store"
import ReactLenis from "lenis/react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

type ProvidersProps = {
    children: any
}

const Providers = ({children}: ProvidersProps) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ReactLenis root options={{ lerp: 0, duration: 2 }}>
                    {children}
                </ReactLenis>
            </PersistGate>
        </Provider>
    )
}

export default Providers
