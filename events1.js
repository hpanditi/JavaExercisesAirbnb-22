// bad
$(this).trigger('listingUpdated', listing.id);

// ...

$(this).on('lisitingUpdated', (e, listingID) => {
    // do something with listingID
});

// or

// good
$(this).trigger('lisitingUpdated', { listingID: listing.id });

// ...

$(this).on('lisitingUpdated', (e, data) => {
    // do something with data.listingID
});
