import BoxInput from "@/src/components/Boxinput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Address() {

    const router = useRouter();

    return (
        <View className="flex-1 items-center bg-white mx-8 pt-10">
            <Text className="text-2xl font-normal">
                Criar sua conta
            </Text>
            <View className=" w-full pt-5 mb-10">
                <BoxInput label="Endereço" placeholder="Digite seu Endereço" />
                
                <View className="flex-row gap-3">
                <View className="w-[74%]">
                <BoxInput label="Complemento" placeholder="Ex: Qd. Lt." />
                </View>
                <View className="w-[26%]">
                <BoxInput label="Número" placeholder="Nº" />
                </View>
                </View>

                <BoxInput label="Bairro" placeholder="Digite seu Bairro" />
                
                <View className="flex-row gap-3">
                <View className="w-[74%]">
                <BoxInput label="Cidade" placeholder="Digite seu Cidade" />
                </View>
                <View className="w-[26%]">
                <BoxInput label="UF" placeholder="UF" />
                </View>
                </View>
                <BoxInput label="CEP" placeholder="Digite o CEP" />
            </View>
            <View className=" w-full pt-4 mb-28">
                <Button label="Criar minha Conta" url=""></Button>
            </View>
        </View>
    );
}