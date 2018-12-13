export default item => `
  <article itemscope itemtype="http://schema.org/MusicAlbum">
    <div class="metadata-container">
      <a itemprop="url" href="${item.data.formattedUrl}">
        ${item.album && item.artist ? `
          <div>
            <span itemprop="name">${item.album}</span>
            ${item.date && `(<span itemprop="datePublished">${item.date}</span>)`}
          </div>
  
          <div itemprop="byArtist" itemscope itemtype="http://schema.org/MusicGroup">
            <span itemprop="name">${item.artist}</span>
          </div>
        ` : item.data.title}
      </a>
      
      <div class="url">${item.data.formattedUrl}</div>
      
      <!--
      ${item.tracks ? `
          <ol>
              ${item.tracks.map(data => `
                  <li itemprop="track" itemscope itemtype="http://schema.org/MusicRecording">
                      <span itemprop="name">${data.name}</span>
                      ${data.duration && `(<span itemprop="duration">${data.duration}</span>)`}
                  </li>
              `).join('')}
          </ol>
      ` : ''}
      -->
      
      ${item.description ? `
          <p itemprop="description">${item.description}</p>
      ` : ''}
      
      ${item.embed ? `
          <div itemscope itemtype="http://schema.org/AudioObject">
              <object itemprop="embedUrl" data="${item.embed.data}" width="${item.embed.width}" height="${item.embed.height}" allow="encrypted-media"></object>
          </div>
      ` : ''}
    </div>
  
    <!--
    <div>
       ${item.image ? `
          <a class="image-container" href="${item.formattedUrl}">
              <img itemprop="image" src="${item.image}">
          </a>
      ` : ''}
    </div>
    -->
  </article>
`
