import { firestore } from 'react-native-firebase';

const refA = firestore.collection('cities').doc('London');
const refB = firestore.collection('cities').doc('Manchester');
const refC = firestore.collection('cities').doc('Nottingham');
const refD = firestore.collection('countries').doc('United Kingdom');

const updateFunction = async (transaction) => {
  const [londDoc, mancDoc, nottDoc, ukDoc] = await Promise.all([
    transaction.get(refA),
    transaction.get(refB),
    transaction.get(refC),
    transaction.get(refD)
  ]);

  // + 1 on London population as we're also incrementing it
  const londPop = londDoc.exists ? londDoc.data().population + 1 : 1;

  // only using these for UK total
  const mancPop = mancDoc.exists ? mancDoc.data().population : 0;
  const nottPop = nottDoc.exists ? nottDoc.data().population : 0;

  // set or update London population
  if (!londDoc.exists) {
    transaction.set(refA, { population: londPop });
  } else {
    transaction.update(refA, {
      population: londPop
    });
  }

  // set or update UK population
  const totalPop = londPop + mancPop + nottPop;
  if (!ukDoc.exists) {
    transaction.set(refD, { population: totalPop });
  } else {
    transaction.update(refD, {
      population: totalPop
    });
  }

  // return the values so we can log them in the transaction result promise
  return {
    london: londPop,
    manchester: mancPop,
    nottingham: nottPop,
    uk: totalPop
  };
};

// run the transaction
firestore
  .runTransaction(updateFunction)
  .then((result) => {
    console.log(result);
    // OUTPUTS:
    //  { london: 1, manchester: 0, nottingham: 0, uk: 1 }
  })
  .catch((error) => {
    console.log('Transaction failed: ', error);
  });
