import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import SPACING from '../../config/SPACING'
import COLORS from '../../config/COLORS'
import CATEGORIES from '../../config/CATEGORIES'
import Ionicons from '@expo/vector-icons/Ionicons';
const Home = () => {
    const WIDTH = Dimensions.get("screen").width
    const [activeCategory, setActiveCategory] = useState(0)
    return (
        <View style={{ padding: SPACING * 2 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text
                    style={{
                        fontSize: SPACING * 3,
                        fontWeight: "bold",
                        color: COLORS.dark
                    }}>
                    Discover
                </Text>
                <Image style={{ height: SPACING * 5, width: SPACING * 5, borderRadius: SPACING * 5 }} source={require("../../assets/images/Avatar.png")} />
            </View>
            <ScrollView style={{ marginVertical: SPACING * 2 }} horizontal>
                {CATEGORIES.map((category, index) =>
                    <TouchableOpacity key={index}
                        style={{ marginRight: SPACING }}
                        onPress={() => setActiveCategory(index)}
                    >
                        <Text style={[{ fontSize: SPACING * 2, color: COLORS.dark }, activeCategory === index && { color: COLORS.primary }]} >{category.title}</Text>
                    </TouchableOpacity>)}
            </ScrollView>
            <Text style={{ fontSize: SPACING * 1.7, color: COLORS.dark }}>
                {CATEGORIES[activeCategory].tours.length + " "}
                {CATEGORIES[activeCategory].title}
            </Text>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            snapToInterval={WIDTH*0.7}
            decelerationRate="fast"
            pagingEnabled
            style={{marginVertical:SPACING*2}}
            >
                {
                    CATEGORIES[activeCategory].tours.map((tour, index) => (
                        <TouchableOpacity  key={index} style={{ 
                            width: WIDTH * 0.7,
                            height: WIDTH * 0.9,
                            overflow: "hidden",
                            borderRadius: SPACING * 2,
                            marginRight: SPACING*2 }}>
                                <View style={{
                                    position:"absolute",
                                    zIndex:1,
                                    height:"100%",
                                    width:"100%",
                                    backgroundColor:COLORS.transparent,
                                    justifyContent:"space-between",
                                    padding:SPACING
                                }}>
                                    <TouchableOpacity style={{alignSelf:"flex-end"}}>
                                        <Ionicons name="heart" size={SPACING*4} color={COLORS.white}/>
                                        </TouchableOpacity>
                                        <Text style={{
                                            fontSize:SPACING*2,
                                            color:COLORS.white,
                                            fontWeight:"700",
                                            marginLeft:SPACING
                                        }}
                                        >{tour.title}</Text>
                                    
                                </View>
                            <Image source={tour.image} style={{ height: "100%", width: "100%" }} />
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <Text>Felling Adventure</Text>
        </View>
    )
}

export default Home