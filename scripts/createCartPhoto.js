export const createCartPhoto = data => {
  const card = document.createElement('li');
  card.className = 'card';

  const cardItem = document.createElement('a');
  cardItem.id = data.id;
  cardItem.className = 'grid-item';
  cardItem.href = `page.html?photo=${data.id}`;

  const photo = new Image();
  photo.width = '200';
  photo.src = data.urls.small;
  photo.alt = data.alt_description;

  const author = document.createElement('a');
  author.className = 'card__author'
  author.href = data.user.links.html;

  const avatarAuthor = new Image();
  avatarAuthor.className = 'author__photo'
  avatarAuthor.width = '32';
  avatarAuthor.height = '32'
  avatarAuthor.src = data.user.profile_image.medium;
  avatarAuthor.alt = data.user.bio;
  avatarAuthor.title = data.user.username;

  author.append(avatarAuthor);

  const likeBtn = document.createElement('button');
  likeBtn.className = 'card__photo-like';
  likeBtn.textContent = data.likes;

  const downloadLinks = document.createElement('a');
  downloadLinks.className = 'card__download';
  downloadLinks.href = data.links.download;
  downloadLinks.download = true;
  downloadLinks.target = '_blank';



  cardItem.append(photo, author, likeBtn, downloadLinks);

  card.append(cardItem);
  return card;
};
