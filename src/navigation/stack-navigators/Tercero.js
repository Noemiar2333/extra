import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import { Image, Center, NativeBaseProvider } from "native-base";

function Example() {
  return <Center>
      <Image size={150} borderRadius={100} source={{
      uri: "https://utvt.edomex.gob.mx/sites/utvt.edomex.gob.mx/files/images/1%20copia.jpg"
    }} alt="Alternate Text" />
    <Text style={{color: 'black'}}>Ejemplo de una imagen.</Text>
    </Center>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    

const styles = StyleSheet.create({})