<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-bind:key="server" v-for="server in 5">
                Server # {{ server }}
            </li>   
        </ul>
    </div>
</template>
