<script>
	import { Textarea, Alert, ToolbarButton } from 'flowbite-svelte';


	let conversations = [];
	let currentConversation = null;
	currentConversation = conversations[0]; // Set the first conversation as the current one

	let newMessage = '';
	// Generate fake messages and conversations similar to WhatsApp
	conversations = [
		{
			title: 'Conversation 1',
			lastMessage: 'Hello, this is a message from Conversation 1',
      user: 'User 1',
			messages: [
				{ sender: 'User 1', text: 'Hello, this is a message from User 1', seen: false },
				{ sender: 'User 2', text: 'Hello, this is a message from User 2' }
			]
		},
		{
			title: 'Conversation 2',
			lastMessage: 'Hello, this is a message from Conversation 2',
      user: 'User 2',
			messages: [
				{ sender: 'User 3', text: 'Hello, this is a message from User 3', seen: false },
				{ sender: 'User 4', text: 'Hello, this is a message from User 4', seen: false }
			]
		}
	];

	// Function to select a conversation
	function selectConversation(index) {
		currentConversation = conversations[index];
	}

	// Function to add a message to the current conversation
	function addMessageToConversation(message) {
		currentConversation.messages.push({ sender: 'User', text: message, seen: false });
		newMessage = '';
	}

	// Function to create a new conversation
	function createNewConversation() {
		const newConversation = {
			title: `Conversation ${conversations.length + 1}`,
			lastMessage: '',
			messages: []
		};
		conversations.push(newConversation);
		selectConversation(conversations.length - 1);
	}

	// Function to send a new message
	function sendMessage() {
		if (newMessage.trim() !== '') {
			addMessageToConversation(newMessage);
			currentConversation.lastMessage = newMessage;
		}
	}
	let searchQuery = '';

	function searchConversations() {
		if (searchQuery.trim() !== '') {
			conversations = conversations.filter((conversation) =>
				conversation.user.includes(searchQuery)
			);
		}
	}
</script>

<main class="flex mt-16 ml-72 bg-white rounded-lg p-6">
  <div class="flex flex-col conversations w-full">
    <div class="flex justify-between items-center mb-4">
      <div on:click={searchConversations} class="cursor-pointer">
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      </div>
      <input bind:value={searchQuery} class="border rounded-lg p-2" placeholder="Search conversations..." />
      <ToolbarButton on:click={createNewConversation}>
       
      </ToolbarButton>
    </div>
    {#each conversations as conversation, index}
      <div class="conversation" on:click={() => selectConversation(index)}>
        <h2>{conversation.title}</h2>
        <p>{conversation.lastMessage}</p>
      </div>
    {/each}
  </div>
  <div class="messages w-2/3">
		{#if currentConversation}
			<h2>{currentConversation.title}</h2>
			{#each currentConversation.messages as message}
				<div class=" chat {message.sender == 'User' ? 'chat-end' : 'chat-start'} ">
					<div class="chat-header">
						{message.sender}
					</div>
					<div class="chat-bubble chat-bubble-info">{message.text}</div>
					<div class="chat-footer opacity-50 text-xs">
						<time class="text-xs opacity-50">2 hours ago</time>
						{#if message.seen && message.sender == 'User'}
							- Seen
						{/if}
						{#if !message.seen && message.sender == 'User'}
							- Unseen
						{/if}
					</div>
				</div>
			{/each}
			<Textarea bind:value={newMessage} />
			<ToolbarButton on:click={sendMessage}>Send</ToolbarButton>
		{/if}
	</div>
</main>

<style>
	.conversations {
		display: flex;
		flex-direction: column;
		border-right: 1px solid #ddd;
		padding: 10px;
	}
	.conversation {
		padding: 10px;
		border-bottom: 1px solid #ddd;
		cursor: pointer;
	}
	.messages {
		padding: 10px;
	}
	.message {
		margin-bottom: 10px;
	}
</style>
