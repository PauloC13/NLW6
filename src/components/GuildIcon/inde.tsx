import React from 'react';
import { Image } from 'react-native';
import { styles } from "./styles";


export function GuildIcon(){
    const uri = 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/04/discord-logo-1000x563.jpg';

    return(
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}