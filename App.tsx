import { ClerkProvider } from "@clerk/clerk-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <ClerkProvider publishableKey={"ENTER KEY HERE"}>
      <SafeAreaProvider>Hi there</SafeAreaProvider>
    </ClerkProvider>
  );
}
