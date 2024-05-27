const documentStorageAbi = [
  {
    'inputs': [],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'documentId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'string',
        'name': 'status',
        'type': 'string'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      }
    ],
    'name': 'DocumentUpdated',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'documentId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'string',
        'name': 'name',
        'type': 'string'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      }
    ],
    'name': 'DocumentUploaded',
    'type': 'event'
  },
  {
    'inputs': [],
    'name': 'documentCount',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'documents',
    'outputs': [
      {
        'internalType': 'string',
        'name': 'name',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': 'client1',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': 'client2',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': 'description',
        'type': 'string'
      },
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'string',
        'name': 'status',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_documentId',
        'type': 'uint256'
      }
    ],
    'name': 'retrieveDocument',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      },
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_documentId',
        'type': 'uint256'
      },
      {
        'internalType': 'string',
        'name': '_description',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': '_status',
        'type': 'string'
      }
    ],
    'name': 'updateDocument',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': '_name',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': '_client1',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': '_client2',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': '_description',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': '_status',
        'type': 'string'
      }
    ],
    'name': 'uploadDocument',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
];

export default documentStorageAbi;