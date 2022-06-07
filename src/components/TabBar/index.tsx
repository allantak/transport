import { FontAwesome5 } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { AppStyles } from "../../styles/colors";
import {
  Container,
  TabItems,
  Bar,
  ContainerItems,
  styles,
  Touch,
  TitleCarrier,
  ContentModal,
  ContainerRow,
  Check,
  ContentOption,
  Text,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import ReactNativeModal from "react-native-modal";
import Input from "../input";
import Button from "../button";
import Option from "../optionList";

export default function TabBar({ state }: BottomTabBarProps) {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleType, setModalVisibleType] = useState(false);
  const [inputOrigin, setInputOrigin] = useState<string>("");
  const [inputDestination, setInputDestination] = useState<string>("");
  const [inputProduct, setInputProduct] = useState<string>("");
  const [inputBodyWork, setInputBodyWork] = useState<string>("");
  const [inputPrice, setInputPrice] = useState<string>();
  const [inputWeight, setInputWeight] = useState<string>();
  const [inputNote, setInputNote] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPhone, setInputPhone] = useState<string>();

  const [inputCarrier, setInputCarrier] = useState<string>();
  const [inputService, setInputService] = useState<string>("autônomo");
  const [inputCompany, setInputCompany] = useState<string>();

  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalType = () => {
    setModalVisibleType(!isModalVisibleType);
  };

  function handleFilter() {
    setInputOrigin("");
    setInputDestination("");
    setInputProduct("");
    setInputBodyWork("");
    setInputPrice("");
    setInputWeight("");
    setInputNote("");
    setInputEmail("");
    setInputPhone("");
    setInputCarrier("");
    setInputService("");
    setInputCompany("");
    setModalVisible(!isModalVisible);
  }

  function handleOptions(name: string) {
    setInputService(name);
    toggleModalType();
  }

  return (
    <Container>
      <Bar>
        <ContainerItems>
          <TabItems
            onPress={() => goTo("Freight")}
            style={state.index == 0 ? styles.styleIndex0 : styles.styleIndex1}
          >
            <FontAwesome5
              name="truck-loading"
              size={16}
              color={
                state.index == 0
                  ? `${AppStyles.colour.white}`
                  : `${AppStyles.colour.primary}`
              }
            />
          </TabItems>
          <Touch onPress={toggleModal}>
            <AntDesign
              name="pluscircleo"
              size={35}
              color={AppStyles.colour.primary}
            />
          </Touch>

          {state.index == 0 ? (
            <ReactNativeModal
              style={styles.view}
              isVisible={isModalVisible}
              onBackdropPress={toggleModal}
            >
              <ContentModal showsVerticalScrollIndicator={false}>
                <TitleCarrier style={styles.titleModal}>
                  Cadastro de carga
                </TitleCarrier>

                <TitleCarrier style={styles.fs15}>Carga</TitleCarrier>
                <Input
                  style={styles.mb15}
                  value={inputOrigin}
                  onChangeText={(t) => setInputOrigin(t)}
                  title="Origem"
                  placeholder="Origem"
                  required
                />
                <Input
                  style={styles.mb15}
                  title="Destino"
                  value={inputDestination}
                  onChangeText={(t) => setInputDestination(t)}
                  placeholder="Destino"
                  required
                />

                <Input
                  style={styles.mb15}
                  title="Empresa"
                  value={inputCompany}
                  onChangeText={(t) => setInputCompany(t)}
                  placeholder="empresa"
                  required
                />

                <Input
                  style={styles.mb15}
                  title="Produto"
                  value={inputProduct}
                  onChangeText={(t) => setInputProduct(t)}
                  placeholder="Produto"
                  required
                />
                <Input
                  style={styles.mb15}
                  title="Carroceria"
                  value={inputBodyWork}
                  onChangeText={(t) => setInputBodyWork(t)}
                  placeholder="Carroceria"
                  required
                />

                <ContainerRow style={styles.mb15}>
                  <Input
                    style={styles.width90}
                    title="Preço"
                    value={inputPrice}
                    onChangeText={(t) => setInputPrice(t)}
                    placeholder="Preço"
                    keyboardType="numeric"
                  />

                  <Input
                    style={styles.width80}
                    title="Peso"
                    value={inputWeight}
                    onChangeText={(t) => setInputWeight(t)}
                    placeholder="Peço da carga"
                    keyboardType="numeric"
                  />
                </ContainerRow>

                <Input
                  style={styles.mb15}
                  title="Observação"
                  value={inputNote}
                  onChangeText={(t) => setInputNote(t)}
                  placeholder="Observação"
                />

                <TitleCarrier style={styles.fs15}>Contato</TitleCarrier>

                <Input
                  style={styles.mb15}
                  value={inputEmail}
                  onChangeText={(t) => setInputEmail(t)}
                  title="Email"
                  placeholder="Email"
                  required
                />
                <Input
                  style={styles.mb15}
                  title="Telefone"
                  value={inputPhone}
                  onChangeText={(t) => setInputPhone(t)}
                  placeholder="telefone"
                  required
                />

                <Button
                  style={styles.mt}
                  text="Cadastro"
                  onPress={handleFilter}
                />
              </ContentModal>
            </ReactNativeModal>
          ) : (
            <ReactNativeModal
              style={styles.view}
              isVisible={isModalVisible}
              onBackdropPress={toggleModal}
            >
              <ContentModal showsVerticalScrollIndicator={false}>
                <TitleCarrier style={styles.titleModal}>
                  Cadastro de veículo
                </TitleCarrier>

                <TitleCarrier style={styles.fs15}>
                  Informação do veiculo
                </TitleCarrier>

                <Input
                  style={styles.mb15}
                  value={inputCarrier}
                  onChangeText={(t) => setInputCarrier(t)}
                  title="Nome do veículo"
                  placeholder="Veículo"
                  required
                />

                <Option
                  style={styles.mb15}
                  title="Tipo de serviço"
                  placeholder={inputService}
                  onPress={toggleModalType}
                />

                <ReactNativeModal
                  style={styles.viewOption}
                  isVisible={isModalVisibleType}
                  onBackdropPress={toggleModalType}
                >
                  <ContentOption>
                    <Check onPress={() => handleOptions("autônomo")}>
                      <Text>Autônomo</Text>
                    </Check>
                    <Check onPress={() => handleOptions("empresaria")}>
                      <Text>Empresaria</Text>
                    </Check>
                  </ContentOption>
                </ReactNativeModal>

                <Input
                  style={styles.mb15}
                  value={inputBodyWork}
                  onChangeText={(t) => setInputBodyWork(t)}
                  title="Carroceria"
                  placeholder="Carroceria"
                  required
                />
                <Input
                  style={styles.mb15}
                  title="Empresa"
                  value={inputCompany}
                  onChangeText={(t) => setInputCompany(t)}
                  placeholder="empresa"
                  required
                />

                <Input
                  style={styles.mb15}
                  title="Preço"
                  value={inputPrice}
                  onChangeText={(t) => setInputPrice(t)}
                  placeholder="preço"
                />

                <TitleCarrier style={styles.fs15}>Contato</TitleCarrier>

                <Input
                  style={styles.mb15}
                  value={inputEmail}
                  onChangeText={(t) => setInputEmail(t)}
                  title="Email"
                  placeholder="Email"
                  required
                />
                <Input
                  style={styles.mb15}
                  title="Telefone"
                  value={inputPhone}
                  onChangeText={(t) => setInputPhone(t)}
                  placeholder="telefone"
                  required
                />

                <Button
                  style={styles.mt}
                  text="Cadastro"
                  onPress={handleFilter}
                />
              </ContentModal>
            </ReactNativeModal>
          )}

          <TabItems
            onPress={() => goTo("Carrier")}
            style={state.index == 1 ? styles.styleIndex0 : styles.styleIndex1}
          >
            <FontAwesome5
              name="truck"
              size={16}
              color={
                state.index == 1
                  ? `${AppStyles.colour.white}`
                  : `${AppStyles.colour.primary}`
              }
            />
          </TabItems>
        </ContainerItems>
      </Bar>
    </Container>
  );
}
