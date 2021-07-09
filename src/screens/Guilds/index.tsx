import React from 'react';
import { FlatList, View } from 'react-native';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

export type GuildProps = {
    id: string,
    name:string,
    icon: null,
    owner: boolean
}

type Props ={
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds( { handleGuildSelect} : Props){
    const guilds= [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '2',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '3',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '4',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '5',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '6',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '7',
            name: 'Lendários',
            icon: null,
            owner: true
        }
    ];
 return(
     <View style={styles.container}>
        <FlatList
            data={guilds}
            keyExtractor={item=> item.id}
            renderItem={({item}) =>(
                <Guild 
                onPress={() => handleGuildSelect(item)}
                data={item} />
            )}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <ListDivider isCentered/>}
            contentContainerStyle={{paddingBottom: 69, paddingTop: 103}}
            ItemSeparatorComponent={() => <ListDivider isCentered/>}
            style={styles.guilds}
        />
     </View>
    );
}