import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Menu } from 'react-native-paper'

const orders = {
  1: {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  },
  2: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC',
  },
  3: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC',
  },
}

const OrderPicker = ({ setOrder }) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu} style={styles.anchor}>
            <Text style={styles.anchorText}>Order By</Text>
          </Pressable>
        }
      >
        <Menu.Item
          onPress={() => setOrder(orders[1])}
          title="Latest repositories"
        />
        <Menu.Item
          onPress={() => setOrder(orders[2])}
          title="Highest rated repositories"
        />
        <Menu.Item
          onPress={() => setOrder(orders[3])}
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  anchor: {
    width: '100%',
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    margin: 5,
  },
  anchorText: {
    fontSize: 16,
    textAlign: 'center',
  },
})

export default OrderPicker
