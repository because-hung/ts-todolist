<script setup lang="ts">
import { TodoStatus } from '../types';
import TodoGroup from './TodoGroup.vue'
</script>

<template>
    <div>
        <TodoGroup :status="TodoStatus.Pending" />
        <TodoGroup :status="TodoStatus.Progress" />
        <TodoGroup :status="TodoStatus.Complete" />
    </div>
</template>
