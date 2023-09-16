<template>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col justify-between text-center mx-5">
      <div class="mt-5" v-for="message in messageList" :key="message.id">
        <MessageCard :message="message" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { messageService } from '@/services/contact.service'
import { onMounted } from 'vue'
import MessageCard from '../../components/MessageCard.vue'

const messageList = ref([])

const getMessages = async () => {
  try {
    let response = await messageService.messageRead()
    messageList.value = response.data
    console.log(messageList.value)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getMessages()
})
</script>
