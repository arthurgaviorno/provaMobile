import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Card from './src/components/Cards';



export default function App() {

  const cards = [
    {
      titulo: 'Espada de Hades',
      stats: '+20 ataque / -5 magia / ESPECIAL: +10% de chance de crítico quando usado com build warrior',
      troca: 'Troco pela adaga de Morpheus',
      imgUrl: "https://p.turbosquid.com/ts-thumb/ME/w4WKOk/7x/ts_urp_custom..._26.02.2022_150937/jpg/1645859659/600x600/fit_q87/43adbcef4b3416ace9399462a747d480f0881c16/ts_urp_custom..._26.02.2022_150937.jpg"
    },
    {
      titulo: 'Arco de Freya',
      stats: '+10 ataque longa distância / +20 magia / ESPECIAL: +20% de precisão se usado com arqueiro mago, mas redução de 3% na velocidade ',
      troca: 'Troco por dois itens de raridade épica!',
      imgUrl: "https://png.pngtree.com/png-clipart/20210907/ourlarge/pngtree-game-bow-and-arrow-weapon-png-image_3869710.jpg"
    },
    {
      titulo: 'Sapato de hermes',
      stats: '+5% de defesa contra ataques à longa distância / +10% de velocidade quando usado na build rogue / ESPECIAL: +5% de chance de se esquivar após um ataque carregado inimigo',
      troca: 'Troco por uma adaga de raridade rara',
      imgUrl: "https://preview.free3d.com/img/2012/11/1857415807277990995/2xiyrp3a.jpg"

    }
  ]

  return (
    <View style={styles.container}>
      {cards.map(f => <Card card={f}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});